// Auto-Generated export from HakuNeko Legacy
//import { Tags } from '../Tags';
import icon from './MangaYurdu.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import * as Common from './decorators/Common';

@Madara.MangaCSS(/^https?:\/\/mangayurdu\.com\/manga\/[^/]+\/$/)
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv1()
@Madara.PagesSinglePageCSS()
@Common.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangayurdu', 'Manga Yurdu', 'https://mangayurdu.com'/*, Tags.Media., Tags.Language.*/);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class MangaYurdu extends WordPressMadara {

    constructor() {
        super();
        super.id = 'mangayurdu';
        super.label = 'Manga Yurdu';
        this.tags = [ 'manga', 'webtoon', 'turkish' ];
        this.url = 'https://mangayurdu.com';
    }
}
*/