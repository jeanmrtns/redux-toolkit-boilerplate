"use client"
import { ReposList } from "@/components/ReposList";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector"
import { decrement, increment, incrementByAmount } from "@/store/features/counter/counterSlice";

export default function Home() {
  const counter = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch()

  function handleIncrement() {
    dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  function handleIncrementRandom() {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    dispatch(incrementByAmount(randomNumber))
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">
        Counter: {counter.value}
      </h1>

      <div className="flex items-center gap-1">
        <button className="bg-violet-500 rounded py-1 px-2 hover:bg-violet-700 transition-colors" onClick={handleIncrement}>Increment</button>
        <button className="bg-violet-500 rounded py-1 px-2 hover:bg-violet-700 transition-colors" onClick={handleDecrement}>Decrement</button>
        <button className="bg-violet-500 rounded py-1 px-2 hover:bg-violet-700 transition-colors" onClick={handleIncrementRandom}>Random Increment</button>
      </div>

      <ReposList />
    </div>
  )
}
