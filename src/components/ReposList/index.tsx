import { useAppDispatch } from "@/hooks/useAppDispatch"
import { useAppSelector } from "@/hooks/useAppSelector"
import { useFetchRepos } from "@/lib/queries/useFetchRepos"
import { fetchRepos } from "@/store/features/repos/reposSlice"
import { useEffect } from "react"

export function ReposList() {
  const repos = useAppSelector(state => state.repos.repos)
  const dispatch = useAppDispatch()
  const { data } = useFetchRepos()

  function loadRepos() {
    dispatch(fetchRepos(data))
  }

  return (
    <div className="mt-4">
      <h3>Github Repos</h3>
      <button className="bg-violet-500 rounded py-1 px-2 hover:bg-violet-700 transition-colors" onClick={loadRepos}>Load Repos</button>

      <ul>
        {repos?.map(repo => (
          <div key={repo.id}>
            <strong>
              {repo.name}
            </strong>
          </div>
        ))}
      </ul>
    </div>
  )
}