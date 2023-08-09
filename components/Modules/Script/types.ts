import { ScriptDTO } from '@/api/dto/sript.dto'

export interface MyScriptType extends ScriptDTO {}

export interface ScriptModuleProps {
	myScript: MyScriptType
}
