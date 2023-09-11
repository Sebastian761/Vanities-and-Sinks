import { ServiceCardIcon } from "./ServiceCardIcon"
import ConstructionIcon from '@mui/icons-material/Construction';
import CountertopsIcon from '@mui/icons-material/Countertops';
import SpaIcon from '@mui/icons-material/Spa';
import { BuyCardIcon } from "./BuyCardIcon";
import { InfoCardIcon } from "./InfoCardIcon";

export const CardsContainer = () => {



    return (
    <>
        <div className="relative h-80 bg-red-400">
            <div className="w-[90vw] hidden m-auto relative bg-white top-[-30%] shadow-xl tablet:grid gap-4 grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
                <ServiceCardIcon   Icon={ConstructionIcon } />
                <BuyCardIcon  Icon={CountertopsIcon}/>
                <InfoCardIcon  Icon={SpaIcon}/>
            </div>
        </div>
    </>
        
    )
}
