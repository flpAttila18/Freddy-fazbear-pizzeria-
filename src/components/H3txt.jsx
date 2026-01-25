export default function H3TXT({ h3txt , center }) {
  return (
    <div className={`container justify-content-center gap-4 mt-5 ${center ? 'text-center' : ''}`}>
      <h3>{h3txt}</h3>
    </div>
  )
}