interface MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: boolean;
  'media-metadata': MediaMetadata[];
}
