export interface PhotoData {
    filename: string;
    title?: string;
    location?: string;
    date?: string;
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutter: string;
    iso: string;
    notes?: string;
}

export const galleryPhotos: PhotoData[] = [
    /* TEMPLATE */
    /*
    {
        filename: "xxxxxx",
        title: "xxxxx",
        location: "xxxxxx",
        date: "xxxxxx",
        camera: "Canon EOS 5D Mark IV",
        lens: "xxxx",
        focalLength: "xxxxx",
        aperture: "xxxxxx",
        shutter: "xxxxxxxx",
        iso: "xxxxx",
        notes: "xxxxxxxx",
    },
    */
    
    {
        filename: "duck-bathing.JPG",
        location: "Kobe Animal Kingdom",
        date: "June, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Canon EF 70-200mm F2.8 L USM",
        focalLength: "200mm",
        aperture: "f/2.8",
        shutter: "1/4000s",
        iso: "500",
    },

    {
        filename: "sleeping-otter.JPG",
        location: "Kobe Animal Kingdom",
        date: "June, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Canon EF 70-200mm F2.8 L USM",
        focalLength: "200mm",
        aperture: "f/2.8",
        shutter: "1/2000s",
        iso: "200",
    },

    {
        filename: "katsuoji-daruma-hydrangea.JPG",
        location: "Katsuo-ji Temple",
        date: "June, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Canon EF 24-105mm F4 L IS USM",
        focalLength: "50mm",
        aperture: "f/4",
        shutter: "1/1250s",
        iso: "160",
    },

    {
        filename: "battery-spencer-portrait.jpeg",
        location: "Battery Spencer Overlook",
        date: "August, 2026",
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
        location: "Battery Spencer Overlook",
        date: "August, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Sigma 24-105mm F4 DG OS HSM Art",
        focalLength: "28mm",
        aperture: "f/6.3",
        shutter: "1/20s",
        iso: "320",
    },


]