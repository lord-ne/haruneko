// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './MangaRead.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangaread', `MangaRead`, 'https://www.mangaread.org' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class MangaRead extends WordPressMadara {

    constructor() {
        super();
        super.id = 'mangaread';
        super.label = 'MangaRead';
        this.tags = [ 'webtoon', 'english' ];
        this.url = 'https://www.mangaread.org';
    }
}
*/