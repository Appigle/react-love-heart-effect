import { useEffect, useRef, useState } from 'react';
import './loveHeartEffect.css';
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
const LoveHeartEffect = ({
  height = 100,
  width = 100,
  heartBeatTimeInterval = 1000,
  heartBeat = false,
  liked = false,
  onChange,
  containerCls = '',
  containerStyle: containerStyleParams = {},
}: LoveHeartEffectProps) => {
  const size = Math.max(Math.min(height, width), 10);
  const containerStyles = {
    height: `${height}px`,
    width: `${width}px`,
    position: 'relative',
    margin: `${(size / 4) * -1}px`,
  } as React.CSSProperties;

  const [isLiked] = useState(liked);

  const labelRef = useRef<HTMLLabelElement>(null);
  const cbRef = useRef<HTMLInputElement>(null);
  const [isInitial, setIsInitial] = useState(true);
  const heartBeatRef = useRef<number>();

  const [labelStyles, setLabelStyles] = useState<React.CSSProperties>(() => {
    return isLiked
      ? {
          backgroundPosition: 'right',
        }
      : {};
  });

  const onChangeCb = (
    liked: boolean,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (labelRef.current) {
      labelRef.current.setAttribute('data-initial', '1');
    }
    if (isInitial) setLabelStyles({});
    setIsInitial(false);
    if (heartBeat) return;
    onChange?.(liked, e);
  };

  useEffect(() => {
    if (heartBeat) {
      heartBeatRef.current = window.setInterval(() => {
        if (cbRef.current) {
          cbRef.current.click();
        }
      }, heartBeatTimeInterval);
    } else {
      clearInterval(heartBeatRef.current);
    }
    return () => {
      clearInterval(heartBeatRef.current);
    };
  }, [heartBeat, heartBeatTimeInterval]);

  const IDRef = useRef(`ID_${Math.random() * 100}`);

  return (
    <div
      style={{ ...containerStyles, ...containerStyleParams }}
      className={containerCls}
    >
      <input
        type="checkbox"
        name="cbBox"
        id={IDRef.current}
        ref={cbRef}
        className="cbBox_love"
        defaultChecked={isLiked}
        onChange={(e) => onChangeCb(e.target.checked, e)}
      />
      <label
        title={`${isLiked}`}
        className="cbBox-love"
        htmlFor={IDRef.current}
        style={{ ...labelStyles, width: width, height: height }}
        ref={labelRef}
        data-initial={0}
      ></label>
    </div>
  );
};
export default LoveHeartEffect;
