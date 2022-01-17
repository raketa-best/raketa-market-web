export interface IUserHeaderProps {
    bgImageUrl: string
    avatarUrl: string
    nick: string
    statusMessage: string
    expProgressPercent: number
    amountRub: number
}

const UserHeader: React.FC<IUserHeaderProps> = (props: IUserHeaderProps) => {
    return <>
        <div>
            <img alt='' src={props.bgImageUrl} />
        </div>
        <div>
            <img alt='' src={props.avatarUrl} />
        </div>
        <div>{props.nick}</div>
        <div>{props.statusMessage}</div>
        <div>{props.expProgressPercent}</div>
        <div>{props.amountRub}</div>
    </>
}

export default UserHeader