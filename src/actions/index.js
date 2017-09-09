import { REQUEST_EVENTS, RECEIVE_EVENTS } from './types'

function requestEvents() {
  return {
    type: REQUEST_EVENTS
  }
}

function receiveEvents(json) {
  return {
    type: RECEIVE_EVENTS,
    events: json.map(event => event)
  }
}

export function fetchEvents(date) {
  return (dispatch) => {
    dispatch(requestEvents())
    return fetch(
      `https://www.tappointment.com/test_events.php?day=${date}`
    )
      .then(response => response.json())
      .then(json => dispatch(receiveEvents(json)))
  }
}