import {create} from 'zustand'; 

interface KeyPoints {
    meeting: any;
    setData: (meetingData: any) => void;
    clearData: () => void;
}

export const useKeyPointsStore = create<KeyPoints>((set) => ({
    meeting: null,
    setData: (meetingData: any) => set({ meeting: meetingData }),
    clearData: () => set({ meeting: null }),
}));