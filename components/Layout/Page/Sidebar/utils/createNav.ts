import { MyRoutes } from '@/constants/routes'
import HomeIcon from '@mui/icons-material/Home'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

export const createNav = () => {
	return [
		{
			label: 'Головна',
			link: MyRoutes.MAIN,
			skip: false,
			Icon: HomeIcon,
		},
		{
			label: 'Візити до лікаря',
			link: MyRoutes.VISITS,
			skip: false,
			Icon: MedicalInformationIcon,
		},
		{
			label: 'Мої документи',
			link: MyRoutes.MY_DOCS,
			skip: false,
			Icon: PictureAsPdfIcon,
		},
	]
}
