import chef_image from "/public/images/chef-claude-icon.png"


export default function Header(){
    return (
        <>
            <div className="header">
                <img className="chef-image" src={chef_image} alt="claude chef icon" />
                <h1 className="heading">Chef Claude</h1>
            </div>
        </>
    )
}