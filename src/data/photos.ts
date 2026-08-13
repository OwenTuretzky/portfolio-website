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
    {
        filename: "duck-bathing.JPG",
        location: "Kobe Animal Kingdom",
        date: "June, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Canon EF 70-200 F2.8 L USM",
        focalLength: "200mm",
        aperture: "f/2.8",
        shutter: "1/4000s",
        iso: "500",
    },
    
    {
        filename: "battery-spencer-locks-landscape.jpeg",
        location: "Battery Spencer Overlook",
        date: "August, 2026",
        camera: "Canon EOS 5D Mark IV",
        lens: "Sigma 24-105mm F4 DG OS HSM Art",
        focalLength: "42mm",
        aperture: "f/4",
        shutter: "1/20s",
        iso: "125",
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