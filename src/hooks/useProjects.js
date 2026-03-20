import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export function useProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

 useEffect(() => {
  async function fetchProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")

    console.log("DATA FROM SUPABASE 👉", data)
    console.log("ERROR 👉", error)

    if (!error) {
      setProjects(data)
    }
    setLoading(false)
  }

  fetchProjects()
}, [])


  return { projects, loading }
}
