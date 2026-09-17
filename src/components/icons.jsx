import {
  CarFront,
  ShieldCheck,
  CalendarCheck,
  BadgeDollarSign,
  Headset,
  Eye,
  Zap,
  Heart,
  Mail,
  MapPin,
  PhoneIncoming
} from "lucide-react";
import { Bluetooth } from 'lucide-react'
const FeatureIcons = (props) => {
  switch (props.icons) {
    case "ShieldCheck":
      return <ShieldCheck className="text-muted group-hover:text-gold " />;
      break;

    case "CalendarCheck":
      return <CalendarCheck className="text-muted text-4xl group-hover:text-gold" />;

    case "BadgeDollarSign":
      return <BadgeDollarSign className="text-muted text-4xl group-hover:text-gold" />;
      break;
    case "Headset":
      return <Headset className="text-muted group-hover:text-gold" />;
      break;
    case "CarFront":
      return <CarFront className="text-paper" />
      break;
    case "Eye":
      return <Eye className="text-gold" />
      break;
    case "Zap":
      return <Zap className="text-gold" />
      break;
    case "Heart":
      return <Heart className="text-gold" />
      break;
    case "Mail":
      return <Mail className='text-muted transition-all duration-200 ease-in hover:text-paper' />
      break;
    case "PhoneIncoming":
      return <PhoneIncoming className="text-muted transition-all duration-200 ease-in hover:text-paper" />
      break;
    case "MapPin":
      return <MapPin className="text-muted transition-all duration-200 ease-in hover:text-paper" />
      break;

    default:
      return
  }


}
export default FeatureIcons