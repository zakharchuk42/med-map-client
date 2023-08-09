'use client'

import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UiTextarea } from '@/components/Ui/UiTextarea/view'
import { editScript } from '@/api/script'
import UiButton from '@/components/Ui/UiButton/view'
import UiBox from '@/components/Ui/UiBox/view'
import { isHaveLength } from '@/utils/isHaveLength'
import { ColorsEnum } from '@/components/Ui/UiButton/types'
import { EditScriptFormProps } from '@/components/Modules/Forms/EditScript/types'
import { UpdateScriptDTO } from '@/dto/sript.dto'
import { useHandlerReq } from '@/hooks/useHandlerReq'

const EditScriptForm: React.FC<EditScriptFormProps> = ({
	scriptId,
	emptyData,
	value,
	fieldName,
	color,
}) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const { isLoading, handler } = useHandlerReq()

	const { control, handleSubmit, setValue } = useForm({
		mode: 'onChange',
		defaultValues: {
			[fieldName]: value,
		},
	})
	const submit: SubmitHandler<UpdateScriptDTO> = async (data) => {
		await handler(editScript(data, scriptId))
		setIsEdit(false)
	}

	return (
		<UiBox
			flex
			direction={'column'}
			width={'100%'}
			height={'100%'}
			justify={'between'}
		>
			{isHaveLength(value) || isEdit ? (
				<form noValidate onSubmit={handleSubmit(submit)}>
					<Controller
						control={control}
						name={fieldName}
						render={({ field }) => {
							return (
								<UiTextarea
									value={field.value}
									onChange={(e) => field.onChange(e)}
									minRows={10}
									maxRows={10}
									disabled={!isEdit}
								/>
							)
						}}
					/>
					<UiBox flex justify={'end'} gap={'10px'} pt={'md'}>
						{isEdit && (
							<>
								<UiButton
									type={'button'}
									onClick={() => {
										setIsEdit(false)
										setValue('otherNotes', value)
									}}
									color={ColorsEnum.RED}
								>
									Відмінити
								</UiButton>
								<UiButton
									color={ColorsEnum.GREEN}
									disabled={isLoading}
									pending={isLoading}
								>
									Зберегти
								</UiButton>
							</>
						)}
					</UiBox>
				</form>
			) : (
				emptyData
			)}
			{!isEdit && (
				<UiButton
					type={'button'}
					color={color}
					onClick={() => {
						setIsEdit(true)
					}}
				>
					{isHaveLength(value) ? 'Змінити' : 'Додати'}
				</UiButton>
			)}
		</UiBox>
	)
}

export default EditScriptForm
