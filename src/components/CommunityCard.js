import React from 'react'

const CommunityCard = ({title, imgs, desc}) => {
  return (
    <div className="com-card-container">
          <div className="com-card">
            <div className="com-name">
              <h1>{title}</h1>
              <div className="com-icon-container">
                {imgs && imgs.map((img) => <img src={img}/>)}
              </div>
            </div>
            <p>
              {desc}
            </p>
          </div>
        </div>
  )
}

export default CommunityCard