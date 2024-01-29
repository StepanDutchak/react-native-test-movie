import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import IVSPlayer, {IVSPlayerRef} from 'amazon-ivs-react-native-player';

import {GetWindowDimensions} from 'utils/dimensions';

import Bottom from './ui/Bottom/Bottom';
import Header from './ui/Header/Header';

import {IEpisode} from 'types/store';

import {PlayerScreenNavigationProp} from 'types/navigation';
import {AppStateProvider} from 'context/AppState';
import {AppStateProviderProp} from 'types/context';

import {styles} from './styles';

type IPlayerScreen = {
  navigation: PlayerScreenNavigationProp;
  route: any;
};

const PlayerScreen: React.FC<IPlayerScreen> = ({
  navigation,
  route,
}: IPlayerScreen) => {
  const {episodeData, currentEpisode} = route.params;

  const {saveCurrentEpisode}: Partial<AppStateProviderProp> =
    AppStateProvider();

  const mediaPlayerRefs = useRef<{[key: string]: IVSPlayerRef | null}>({});
  const carouselRef = useRef<Carousel<any>>(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [pausedMap, setPausedMap] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    saveCurrentEpisode?.(
      episodeData.episodeUrls[activeSlideIndex].id,
      episodeData,
    );
  }, [activeSlideIndex, episodeData, saveCurrentEpisode]);

  useEffect(() => {
    const initialPausedMap = Object.fromEntries(
      episodeData.episodeUrls.map((item: IEpisode) => [item.id, true]),
    );

    setPausedMap(initialPausedMap);

    const currentRefs = mediaPlayerRefs.current;

    return () => {
      Object.values(currentRefs).forEach(ref => {
        ref?.pause();
      });
    };
  }, [episodeData.episodeUrls]);

  const handleTogglePause = useCallback(
    (id: string) => {
      setPausedMap(prevState => ({...prevState, [id]: !prevState[id]}));
      if (!pausedMap[id]) {
        mediaPlayerRefs.current[id]?.play();
      } else {
        mediaPlayerRefs.current[id]?.pause();
      }
    },
    [pausedMap],
  );

  const handleSnapToItem = (index: number) => {
    setActiveSlideIndex(index);
    const currentId = episodeData.episodeUrls[index].id;
    Object.keys(mediaPlayerRefs.current).forEach(id => {
      if (id !== currentId) {
        mediaPlayerRefs.current[id]?.pause();
        setPausedMap(prevState => ({...prevState, [id]: true}));
      }
    });

    setPausedMap(prevState => ({...prevState, [currentId]: false}));
    mediaPlayerRefs.current[currentId]?.play();

    const lastIndex = episodeData.episodeUrls.length - 1;
    if (index === lastIndex) {
      const lastId = episodeData.episodeUrls[lastIndex].id;
      setPausedMap(prevState => ({...prevState, [lastId]: true}));
    }
  };

  const handleClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = useCallback(
    ({item: {id, url}}: {item: {id: string; url: string}}) => {
      return (
        <IVSPlayer
          ref={ref => (mediaPlayerRefs.current[id] = ref)}
          autoplay
          paused={pausedMap[id]}
          muted={false}
          resizeMode="aspectFill"
          streamUrl={url}>
          <View style={styles.content}>
            <Header episodeNumber={id} leftHandler={handleClose} />
            <Bottom
              controlPlayPress={() => handleTogglePause(id)}
              isPlaying={pausedMap[id]}
            />
          </View>
        </IVSPlayer>
      );
    },
    [handleClose, handleTogglePause, pausedMap],
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={episodeData.episodeUrls}
        renderItem={renderItem}
        sliderHeight={GetWindowDimensions().height}
        sliderWidth={GetWindowDimensions().width}
        itemHeight={GetWindowDimensions().height}
        itemWidth={GetWindowDimensions().width}
        onSnapToItem={handleSnapToItem}
        inactiveSlideOpacity={1}
        firstItem={currentEpisode ? currentEpisode - 1 : undefined}
        inactiveSlideScale={1}
        vertical
      />
    </View>
  );
};

export default PlayerScreen;
