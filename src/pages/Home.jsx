import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const home = () => {
  return (
    <>
    <Main/>
    <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
    <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
    <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
    <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
    <Row rowID='5' title='Horor' fetchURL={requests.requestHorror} />

    <footer className='bg-black text-center lg:text-left'>
      <div className='text-gray-700 text-center p-4'>© 2022 Copyright: <a className='text-gray-700 hover:text-white' href='https://github.com/albanysis'> Albany Siswanto</a></div>
    </footer>
    </>
  )
}

export default home