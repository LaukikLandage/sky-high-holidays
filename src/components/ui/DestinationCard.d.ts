export interface Destination {
    name: string;
    location: string;
    price: string;
    rating: number;
    image: string;
    duration: string;
    type?: 'international' | 'domestic';
}
interface DestinationCardProps {
    destination: Destination;
}
export declare function DestinationCard({ destination }: DestinationCardProps): import("react/jsx-runtime").JSX.Element;
export {};
