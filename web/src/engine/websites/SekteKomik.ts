// Auto-Generated export from HakuNeko Legacy
import { Tags } from '../Tags';
import icon from './SekteKomik.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as MangaStream from './decorators/WordPressMangaStream';
import * as Common from './decorators/Common';

@MangaStream.MangaCSS(/^https?:\/\/sektekomik\.com\/manga\/[^/]+\/$/)
@MangaStream.MangasSinglePageCSS()
@MangaStream.ChaptersSinglePageCSS()
@MangaStream.PagesSinglePageCSS()
@Common.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('sektekomik', 'SEKTEKOMIK.COM', 'https://sektekomik.com', Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.Indonesian);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class SekteKomik extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'sektekomik';
        super.label = 'SEKTEKOMIK.COM';
        this.tags = [ 'webtoon', 'indonesian' ];
        this.url = 'https://sektekomik.com';
        this.path = '/manga/list-mode/';
        this.requestOptions.headers.set('x-referer', this.url);
    }

    async _getMangas() {
        let mangaList = [];
        for (let page = 1, run = true; run; page++) {
            let mangas = await this._getMangasFromPage(page);
            mangas.length > 0 ? mangaList.push(...mangas) : run = false;
        }
        return mangaList;
    }

    async _getMangasFromPage(page) {
        const uri = new URL('/manga/?page=' + page, this.url);
        const request = new Request(uri, this.requestOptions);
        let data = await this.fetchDOM(request, 'div.listupd div.bs div.bsx > a');
        return data.map(element => {
            return {
                id: this.getRootRelativeOrAbsoluteLink(element, request.url),
                title: element.title.trim()
            };
        });
    }

    async _getPages(chapter) {
        const pages = await super._getPages(chapter);
        return pages.map(page => this.createConnectorURI(page));
    }
}
*/