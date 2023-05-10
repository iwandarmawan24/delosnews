import type { Media } from './mediaType';
import type PeriodType from './periodType';

interface ArticleType {
  url: string;
  adx_keywords: string;
  subsection: string;
  column: string | null;
  eta_id: number;
  section: string;
  id: number;
  asset_id: number;
  nytdsection: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  published_date: string;
  source: string;
  updated: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Media[];
  uri: string;
  period?: PeriodType;
}

export default ArticleType;
