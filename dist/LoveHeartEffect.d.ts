export interface LoveHeartEffectProps {
    height?: number;
    width?: number;
    heartBeat?: boolean;
    heartBeatTimeInterval?: number;
    liked?: boolean;
    containerStyle?: React.CSSProperties;
    containerCls?: string;
    onChange?: (liked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const LoveHeartEffect: ({ height, width, heartBeatTimeInterval, heartBeat, liked, onChange, containerCls, containerStyle: containerStyleParams, }: LoveHeartEffectProps) => import("react/jsx-runtime").JSX.Element;
export default LoveHeartEffect;
