import { useState, useCallback } from 'react';
import { Platform } from 'react-native';
import AppleHealthKit, {
    HealthKitPermissions,
} from 'react-native-health';

// NOTE: Health Connect removed for build stability. 
// Re-integrate when Android SDK 35 toolchain stabilizes.

interface HealthData {
    steps: number;
    sleepMinutes: number;
    activeCalories: number;
    mindfulMinutes: number;
}

const IOS_PERMISSIONS: HealthKitPermissions = {
    permissions: {
        read: [
            AppleHealthKit.Constants.Permissions.StepCount,
            AppleHealthKit.Constants.Permissions.SleepAnalysis,
            AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
            AppleHealthKit.Constants.Permissions.MindfulSession,
        ],
        write: [],
    },
};

export function useHealthSync() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isSupported, setIsSupported] = useState(true);
    const [data, setData] = useState<HealthData>({
        steps: 0,
        sleepMinutes: 0,
        activeCalories: 0,
        mindfulMinutes: 0,
    });

    const initHealthKit = useCallback(() => {
        AppleHealthKit.initHealthKit(IOS_PERMISSIONS, (error: string) => {
            if (error) {
                console.warn('Cannot grant permissions: ', error);
                return;
            }
            setIsAuthorized(true);
            fetchIOSData();
        });
    }, []);

    const initHealthConnect = useCallback(async () => {
        // Disabled for V1 Release Stability
        console.log("Health Connect disabled for build stability");
        setIsSupported(false);
    }, []);

    const requestPermissions = useCallback(() => {
        if (Platform.OS === 'ios') {
            initHealthKit();
        } else if (Platform.OS === 'android') {
            initHealthConnect();
        }
    }, [initHealthKit, initHealthConnect]);

    const fetchIOSData = () => {
        const options = {
            startDate: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
        };

        AppleHealthKit.getStepCount(options, (err, results) => {
            if (!err) {
                setData((prev) => ({ ...prev, steps: results.value }));
            }
        });

        AppleHealthKit.getActiveEnergyBurned(options, (err, results) => {
            if (!err && results && results.length > 0) {
                const total = results.reduce((acc, curr) => acc + curr.value, 0);
                setData((prev) => ({ ...prev, activeCalories: total }));
            }
        });

        AppleHealthKit.getSleepSamples(options, (err, results) => {
            if (!err && results) {
                const sleepMins = results.reduce((acc: number, val: any) => {
                    const isAsleep = val.value === 'ASLEEP';

                    if (isAsleep) {
                        const start = new Date(val.startDate).getTime();
                        const end = new Date(val.endDate).getTime();
                        return acc + (end - start) / 60000;
                    }
                    return acc;
                }, 0);
                setData(prev => ({ ...prev, sleepMinutes: sleepMins }));
            }
        });
    };

    return {
        isAuthorized,
        requestPermissions,
        data,
        isSupported
    };
}
