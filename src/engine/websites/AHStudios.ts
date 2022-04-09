import { Tags } from '../Tags';
import icon from './AHStudios.webp';
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
        super('ahstudios', 'A.H Studio', 'https://ahstudios.net', Tags.Media.Manga, Tags.Media.Manhwa, Tags.Language.Spanish);
    }

    public override get Icon() {
        return icon;
    }
}