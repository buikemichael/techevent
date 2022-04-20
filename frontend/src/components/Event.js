import React from 'react';

import styled from 'styled-components';

const EventCard = ({ eventData }) => {

  return (
    <EventHolder>
      <div className="event-card-md">
        <div className="event-thumb">
          <div className="event-lavel">
            <i className="bi bi-diagram-3"></i> <span>{eventData.isVirtual ? 'Virtual Event' : 'Live Event'}</span>
          </div>
        </div>
        <div className="event-content">
          <div className="event-info">
            <div className="event-date"><span>{new Date(eventData.date).toDateString()}</span></div>
            <div className="event-location"><span>{eventData.address}</span></div>
          </div>
          <h5 className="event-title">{eventData.title}</h5>
          <p className='event-description'>{eventData.description}</p>
          <div className="event-bottom">
            <div className="event-readme">
              <span>Register Now</span>
            </div>
          </div>
        </div>
      </div>
    </EventHolder>
  );
};

const EventHolder = styled.div`
  margin-top: 24px;
  background: #fff;
  box-shadow: 0 10px 25px rgb(0 0 0 / 4%);
  border-radius: 5px;
  .event-thumb{
    height: 250px;
    background: rgba(0, 0, 0, 0) linear-gradient(184.08deg, rgba(0, 0, 0, 0.427) 21.79%, rgba(0, 0, 0, 0) 96.67%) repeat scroll 0% 0%;
    background-blend-mode: multiply;
    position: relative;
    .event-lavel{
      position: absolute;
      font-weight: 700;
      font-size: 17px;
      letter-spacing: 1px;
      color: #fff;
      background: #ce1446;
      border-radius: 5px;
      bottom: 0;
      left: 0;
      padding: 10px 30px;
      transition: all .35s;
    }
  }
  .event-content{
    padding: 18px 20px 25px;
    .event-info{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .event-date{
        span{
          display: inline-block;
          font-weight: 600;
          font-size: 13px;
          color: #2d373c;
        }
      }
      .event-location{
        span{
          display: inline-block;
          font-weight: 600;
          font-size: 13px;
          color: #2d373c;
          text-transform: capitalize;
        }
      }
    }
    .event-title{
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      text-transform: capitalize;
      color: #2d373c;
      padding-top: 12px;
      color:#ce1446;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }
    .event-description{
      font-weight: 600;
      font-size: 16px;
      line-height: 30px;
      text-transform: capitalize;
      color: #2d373c;
      padding-top: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }
    .event-bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 17px;
      position: relative;
      .event-readme{
        span{
          font-weight: 700;
          font-size: 15px;
          color:#ce1446;
        }
      }
    }
  }
`;
export default EventCard;
