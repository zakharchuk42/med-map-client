import { FileType } from '@/api/dto/sript.dto'
import { ScriptType } from '@/components/Widgets/Visits/List/types'

interface DataI extends FileType {
	script: ScriptType
}

interface NormalizeDataI {
	name: string
	files: FileType[]
}

type normalizeDataType = (data: DataI[]) => NormalizeDataI[]

export const normalizeData: normalizeDataType = (data) => {
	return Object.values(
		data.reduce((acc: { [key: string]: NormalizeDataI }, file) => {
			const { script, ...otherFileInformation } = file

			if (file.script !== null) {
				acc[script.name] ??= {
					name: file.script.name,
					files: [],
				}
				acc[script.name].files.push(otherFileInformation)
			}

			return acc
		}, {}),
	)
}
