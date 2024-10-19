"use client"; // Mark this as a client component
import { useSearchParams } from 'next/navigation';
import InfoComponent from '../page';
import locations from '../../data/locations'; // Adjust this path as necessary

const ParentComponent: React.FC = () => {
    const searchParams = useSearchParams();
    const locationName = searchParams.get('name');

    // Log the imported locations to ensure they're available
    console.log('Location Data:', locations);

    // Find the corresponding location based on the name from the URL
    const location = locations.find((loc) => loc.name.toLowerCase() === locationName?.toLowerCase()) || null;

    console.log('Location from URL:', locationName);


    return <InfoComponent locations={location} />;
};

export default ParentComponent;
