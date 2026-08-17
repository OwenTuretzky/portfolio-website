export interface PhotoData {
    filename: string;
    title?: string;
    title_ja?: string;
    location?: string;
    location_ja?: string;
    date?: string;
    date_ja?: string;
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutter: string;
    iso: string;
    notes?: string;
    notes_ja?: string;
}

export const galleryPhotos: PhotoData[] = [
    /* TEMPLATE */
    /*
    {
        filename: "xxxxxx",
        title: "xxxxx",
        title_ja: "xxxxx",
        location: "xxxxxx",
        location_ja: "xxxxx",
        date: "xxxxxx",
        date_ja: "xxxxx",
        camera: "Canon EOS 5D Mark IV",
        lens: "xxxx",
        focalLength: "xxxxx",
        aperture: "xxxxxx",
        shutter: "xxxxxxxx",
        iso: "xxxxx",
        notes: "xxxxxxxx",
        notes_ja: "xxxxx",
    },
    */
    
    {
        filename: "duck-bathing.JPG",
        title: "Duck Bathing",
        title_ja: "アヒルの風呂",
        location: "Kobe Animal Kingdom",
        location_ja: "神戸どうぶつ王国",
        date: "June, 2026",
        date_ja: "６月, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Canon EF 70-200mm F2.8 L USM",
        focalLength: "200mm",
        aperture: "f/2.8",
        shutter: "1/4000s",
        iso: "500",
    },

    {
        filename: "sleeping-otter.JPG",
        title: "Naptime",
        title_ja: "昼寝",
        location: "Kobe Animal Kingdom",
        location_ja: "神戸どうぶつ王国",
        date: "June, 2026",
        date_ja: "６月, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Canon EF 70-200mm F2.8 L USM",
        focalLength: "200mm",
        aperture: "f/2.8",
        shutter: "1/2000s",
        iso: "200",
    },

    {
        filename: "pink-hydrangea.JPG",
        title: "Pink Hydrangea",
        title_ja: "ピンク紫陽花",
        location: "Katsuo-ji Temple",
        location_ja: "勝尾寺",
        date: "June, 2026",
        date_ja: "６月, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Canon EF 24-105mm F4 L IS USM",
        focalLength: "70mm",
        aperture: "f/4",
        shutter: "1/1250s",
        iso: "400",
    },

    {
        filename: "katsuoji-daruma-hydrangea.JPG",
        title: "Daruma",
        title_ja: "だるま",
        location: "Katsuo-ji Temple",
        location_ja: "勝尾寺",
        date: "June, 2026",
        date_ja: "６月, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Canon EF 24-105mm F4 L IS USM",
        focalLength: "50mm",
        aperture: "f/4",
        shutter: "1/1250s",
        iso: "160",
    },

    {
        filename: "battery-spencer-portrait.jpeg",
        title: "Battery Spencer Overlook",
        title_ja: "スペンサー砲台",
        location: "Battery Spencer Overlook",
        location_ja:"スペンサー砲台",
        date: "August, 2026",
        date_ja: "8月, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Sigma 24-105mm F4 DG OS HSM Art",
        focalLength: "46mm",
        aperture: "f/6.3",
        shutter: "1/160s",
        iso: "1000",
    },
    

    {
        filename: "battery-spencer-love-forever.jpeg",
        title: "Forever Love",
        title_ja: "Forever Love",
        location: "Battery Spencer Overlook",
        location_ja:"スペンサー砲台",
        date: "August, 2026",
        date_ja: "8月, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Sigma 24-105mm F4 DG OS HSM Art",
        focalLength: "28mm",
        aperture: "f/6.3",
        shutter: "1/20s",
        iso: "320",
    },


]