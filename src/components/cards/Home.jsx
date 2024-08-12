import React from 'react'

const Home = () => {
  return (
    <div className="dashboard-home">
      <div className="card-input">Video</div>
      <div className="member-actions">
        <div className="current-actions">
          <div className="topic">
            <p>Current Member Actions (Live)</p>
          </div>
          <div className="detailed-info">
            <p>Websites viewed</p>
            <p>Websites viewed</p>
            <p>Websites viewed</p>
          </div>
        </div>
        <div className="registered-actions">
          <div className="topic">
            <p>Current Member Actions (Live)</p>
          </div>
          <div className="detailed-info">
            <p>Websites viewed</p>
            <p>Websites viewed</p>
            <p>Websites viewed</p>
          </div>
        </div>
      </div>
      <div className="adverts">Advertise here...</div>
    </div>
  )
}

export default Home
