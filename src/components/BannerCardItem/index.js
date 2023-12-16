import './index.css'

const BannerItems = props => {
  const {bannerCardItem} = props
  const {headerText, description, className} = bannerCardItem
  return (
    <div>
      <li className={`${className} banner-card-item`}>
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="but" type="button">
          Show More
        </button>
      </li>
    </div>
  )
}
export default BannerItems
