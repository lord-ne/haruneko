import { Tags } from '../Tags';
import icon from './AkuManga.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import { ImageDirect } from './decorators/Common';

@Madara.MangaCSS()
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv1()
@Madara.PagesSinglePageCSS()
@ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('akumanga', 'AkuManga', 'https://akumanga.com', Tags.Media.Manhwa, Tags.Language.Arabic);
    }

    public override get Icon() {
        return icon;
    }
}