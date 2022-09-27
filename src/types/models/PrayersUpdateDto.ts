import {PrayersRequestDto} from './PrayersRequestDto';
import {PrayersResponseDto} from './PrayersResponseDto';

export interface PrayersUpdateDto {
  id: number;
  data: PrayersResponseDto;
}
