
export interface IInputPhoneNumberProps {  
    value?: string
    className?: string 

    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  }

export const InputPhoneNumber: React.FC<IInputPhoneNumberProps> = (props: IInputPhoneNumberProps) => {
    return <>
      <input type='tel' value={props.value} placeholder='+7 (...) ...-..-..' 
        onFocus={props.onFocus} onChange={props.onChange} onBlur={props.onBlur} 
        className={props.className} autoComplete='phonenumber'/>    
  </>
}