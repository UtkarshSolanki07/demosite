import React from 'react'
import CountUp from 'react-countup'

const NumberCounter = () => {
  return (
    <div className='bg-secondary text-white py-12'>
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Projects Completed */}
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-3xl font-bold'>
            <CountUp
              start={0}
              end={500}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix='+'
            />
          </p>
          <p className="mt-2">Projects Completed</p>
        </div>

        {/* Satisfied Clients */}
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-3xl font-bold'>
            <CountUp
              end={300}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix='+'
            />
          </p>
          <p className="mt-2">Satisfied Clients</p>
        </div>

        {/* Skilled Professionals */}
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-3xl font-bold'>
            <CountUp
              end={50}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix='+'
            />
          </p>
          <p className="mt-2">Skilled Professionals</p>
        </div>

        {/* Total Sq. Ft. Constructed */}
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-3xl font-bold'>
            <CountUp
              end={1000000}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              separator=','
              suffix='+'
            />
          </p>
          <p className="mt-2">Sq. Ft. Constructed</p>
        </div>

      </div>
    </div>
  )
}

export default NumberCounter
