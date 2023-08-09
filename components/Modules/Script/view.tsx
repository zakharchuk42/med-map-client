import React from 'react'
import UiBox from '@/components/Ui/UiBox/view'
import Drugs from '@/components/Modules/Script/components/Drugs/view'
import Analyses from '@/components/Modules/Script/components/Analyses/view'
import OtherNotes from '@/components/Modules/Script/components/OtherNotes/view'
import Files from '@/components/Modules/Script/components/Files/views'
import { ScriptModuleProps } from '@/components/Modules/Script/types'

const ScriptModule: React.FC<ScriptModuleProps> = ({ myScript }) => {
	return (
		<UiBox flex direction={'column'} gap={'20px'} width={'100%'}>
			<Drugs myDrugs={myScript.drugs} scriptId={myScript.id} />
			<UiBox flex gap={'20px'}>
				<Analyses
					myAnalyses={myScript.analyses}
					scriptId={myScript.id}
				/>
				<OtherNotes
					myNotes={myScript.otherNotes}
					scriptId={myScript.id}
				/>
			</UiBox>
			<Files files={myScript.files} scriptId={myScript.id} />
		</UiBox>
	)
}

export default ScriptModule
