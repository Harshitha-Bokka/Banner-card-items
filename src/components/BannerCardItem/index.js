import './index.css'

const BannerItems = props => {
  const {bannerCardItem} = props
  const {headerText, description, className} = bannerCardItem
  return (
    <div>
      <li className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
      </li>
    </div>
  )
}
export default BannerItems
