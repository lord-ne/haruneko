import { describe, it, expect } from 'vitest';
import { MediaContainer, type MediaItem } from './providers/MediaPlugin';
import './ArrayExtensions';

class MediaContainerMock extends MediaContainer<MediaItem> {
    public override async Update(): Promise<void> {
        return Promise.resolve();
    }
}

describe('Array<MediaContainer<MediaItem>>', () => {

    describe('first()', () => {

        it('Should return null when array is empty', async () => {
            const actual = [].first();
            expect(actual).toBeNull();
        });

        it('Should return first item in array', async () => {
            const actual = [ 7, 'x', null, true ].first();
            expect(actual).toBe(7);
        });
    });

    describe('last()', () => {

        it('Should return null when array is empty', async () => {
            const actual = [].last();
            expect(actual).toBeNull();
        });

        it('Should return last item in array', async () => {
            const actual = [ true, null, 'x', 7 ].last();
            expect(actual).toBe(7);
        });
    });

    describe('distinct()', () => {

        it('Should remove duplicate entries', async () => {
            const actual = [
                new MediaContainerMock('001', 'A'),
                new MediaContainerMock('002', 'B'),
                new MediaContainerMock('001', 'C'),
                new MediaContainerMock('003', 'D'),
                new MediaContainerMock('004', 'E'),
                new MediaContainerMock('004', 'F'),
                new MediaContainerMock('004', 'G'),
                new MediaContainerMock('005', 'H'),
                new MediaContainerMock('003', 'I'),
            ].distinct().map(_ => _.Title);

            expect(actual).toStrictEqual(['A', 'B', 'D', 'E', 'H']);
        });
    });

    describe('isMissingLastItemFrom()', () => {

        it('Should be false when source array and batch array are empty', async () => {
            const actual = [].isMissingLastItemFrom([]);
            expect(actual).toBe(false);
        });

        it('Should be true when source array is empty and batch erray is not empty', async () => {
            const actual = [].isMissingLastItemFrom([ new MediaContainerMock('001', 'A') ]);
            expect(actual).toBe(true);
        });

        it('Should be false when source array is not empty and batch erray is empty', async () => {
            const actual = [ new MediaContainerMock('001', 'A') ].isMissingLastItemFrom([]);
            expect(actual).toBe(false);
        });

        it('Should be true when last item in source array differs from last item in batch array', async () => {
            const actual = [ null, new MediaContainerMock('001', 'A') ].isMissingLastItemFrom([ null, new MediaContainerMock('999', 'X') ]);
            expect(actual).toBe(true);
        });

        it('Should be false when last item in source array is equivalent to last item in batch array', async () => {
            const actual = [ null, new MediaContainerMock('001', 'A') ].isMissingLastItemFrom([ null, new MediaContainerMock('001', 'A') ]);
            expect(actual).toBe(false);
        });
    });
});