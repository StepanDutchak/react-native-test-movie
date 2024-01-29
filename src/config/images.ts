import {IMoviesImageConfig} from '@types';

import AlphaDetectiveImage from '../assets/images/movies/TopRomance/alpha_detective.png';
import TrainedForSeductionImage from '../assets/images/movies/TopRomance/trained_for_seduction.png';
import CrescentImage from '../assets/images/movies/TopRomance/crescent.png';
import NewWee from '../assets/images/movies/TopRomance/new_wee.png';

import WolfstateChroniclesImage from '../assets/images/movies/TrendingNow/wolfstate_chronicles.png';
import BeautifulRevengeImage from '../assets/images/movies/TrendingNow/beautiful_revenge.png';
import SinDeRellaImage from '../assets/images/movies/TrendingNow/sin_de_rella.png';
import ForestOne from '../assets/images/movies/TrendingNow/forest_one.png';

import ForestOne4x from '../assets/images/movies/MainBanner/forest_one4x.png';
import AlphaDetectiveImage4x from '../assets/images/movies/MainBanner/alpha_detective4x.png';
import TrainedForSeductionImage4x from '../assets/images/movies/MainBanner/trained_for_seduction4x.png';
import CrescentImage4x from '../assets/images/movies/MainBanner/crescent4x.png';
import NewWee4x from '../assets/images/movies/MainBanner/new_wee4x.png';

import WolfstateChroniclesImage4x from '../assets/images/movies/MainBanner/wolfstate_chronicles4x.png';
import BeautifulRevengeImage4x from '../assets/images/movies/MainBanner/beautiful_revenge4x.png';
import SinDeRellaImage4x from '../assets/images/movies/MainBanner/sin_de_rella4x.png';

export const MoviesImageConfig: IMoviesImageConfig = {
  alpha_detective: AlphaDetectiveImage,
  trained_for_seduction: TrainedForSeductionImage,
  crescent: CrescentImage,
  wolfstate_chronicles: WolfstateChroniclesImage,
  beautiful_revenge: BeautifulRevengeImage,
  sin_de_rella: SinDeRellaImage,
  forest_one: ForestOne,
  new_wee: NewWee,
};

export const MainBannerImageConfig: IMoviesImageConfig = {
  forest_one: ForestOne4x,
  alpha_detective: AlphaDetectiveImage4x,
  trained_for_seduction: TrainedForSeductionImage4x,
  crescent: CrescentImage4x,
  wolfstate_chronicles: WolfstateChroniclesImage4x,
  beautiful_revenge: BeautifulRevengeImage4x,
  sin_de_rella: SinDeRellaImage4x,
  new_wee: NewWee4x,
};
