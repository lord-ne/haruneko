import { Tags } from '../Tags';
import icon from './EvaScans.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import { ImageDirect } from './decorators/Common';

@Madara.MangaCSS('meta[property="og:title"]:not([content*="EvaScans"])')
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv1()
@Madara.PagesSinglePageCSS()
@ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('evascans', 'EvaScans', 'https://evascans.com', Tags.Media.Manhwa, Tags.Source.Scanlator, Tags.Language.Turkish);
    }

    public override get Icon() {
        return icon;
    }
}