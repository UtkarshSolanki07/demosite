import { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { supabase } from '../utils/supabaseClient'

const stringToBigInt = (str) => {
  let hash = 0n
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31n + BigInt(str.charCodeAt(i))) % 9223372036854775807n
  }
  return hash
}

const useSyncUser = () => {
  const { user } = useUser()

  useEffect(() => {
    const syncUser = async () => {
      if (!user) return

      const { emailAddresses, firstName, lastName, id } = user
      const numericId = stringToBigInt(id)

      const { error } = await supabase
        .from('User')
        .upsert([
          {
            id: numericId.toString(), 
            email: emailAddresses[0]?.emailAddress,
            first_name: firstName,
            last_name: lastName,
          },
        ])

      if (error) {
        console.error('Error syncing user to Supabase:', error)
      }
    }

    syncUser()
  }, [user])
}

export default useSyncUser
