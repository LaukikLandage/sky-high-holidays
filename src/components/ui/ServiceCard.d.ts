import { type LucideIcon } from 'lucide-react';
interface ServiceCardProps {
    number: string;
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
}
export declare function ServiceCard({ number, icon: Icon, title, description, image }: ServiceCardProps): import("react/jsx-runtime").JSX.Element;
export {};
