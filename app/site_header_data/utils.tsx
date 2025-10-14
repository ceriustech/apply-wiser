// app/site_header_data/utils.ts
import type { MetaFunction } from 'react-router';

export function createTypedMetaFunction<T = any>(
	metaData: PageMetaData[]
): MetaFunction<T> {
	return () => metaData as any;
}
