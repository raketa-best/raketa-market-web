export interface IModalProps {
    classNameModal?: string
    onClickModal?: (event: React.MouseEvent<HTMLElement>) => void
    argumentOnClickModal?: any
    children?: any
}

const Modal: React.FC<IModalProps> = (props: IModalProps) => {

    return <>
        <div className={props.classNameModal}
        id='modal_bg' onClick={(e) => (e.target as HTMLButtonElement).getAttribute('id') === 'modal_bg' 
        && props.onClickModal?.(props.argumentOnClickModal) } >
            <div id='childrenModal'>
                {props.children}
            </div>
        </div>
    </>
}

export default Modal