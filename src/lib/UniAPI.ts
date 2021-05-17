interface Course {
  id: string
  name: string
  code: string
  year: number
  degree: string
}

interface Profile {
  name: string
  surname: string
  email: string
  avatar: string | null
}

interface Professor {
  name: string
  code: string
  email: string
}

interface ProfessorTrait {
  id: string
  label: string
}

interface SubjectRating {
  difficulty: number
  lessons: number
  resources: number
}

interface SurveyQuestion {
  id: string
  question: string
}

interface SurveyStats {
  subjectId: string
  subject: Course
  questions: Array<{
    questionId: string
    questionText: string
    dataset: Array<[number, number]>
  }>
  traits: Array<{
    traitId: string
    traitLabel: string
    count: number
  }>
  comments: string[]
}

async function doRequest(params: Omit<RequestInit, 'body'> & { url: string, body?: any }) {
  const currentToken = window.localStorage.getItem('auth_token')
  const url = 'http://83.34.31.26:5000' + params.url
  const res = await fetch(url, {
    mode: 'cors',
    ...params,
    headers: {
      'content-type': 'application/json',
      ...(currentToken ? { authorization: `Bearer ${currentToken}` } : undefined),
      ...params.headers,
    },
    body: JSON.stringify(params.body),
  })
  
  if (res.status >= 400) {
    throw new Error('request error ' + res.status)
  }

  const bodyRes = await res.json()
  
  // Persist auth
  if (url.includes('/login')) {
    window.localStorage.setItem('auth_token', bodyRes.access_token)
  }

  return bodyRes
}

function createUniAPIClient() {
  const client = {
    async login(email: string, password: string): Promise<Profile> {
      if (!email || !password) {
        throw new Error('Missing credentials')
      }

      // Request the token and allow the interceptors to handle it for us
      await doRequest({
        method: 'POST',
        url: '/user/login',
        body: { email, password, },
      })

      const profile = await doRequest({
        method: 'GET',
        url: '/user/profile',
      })
    
      return profile
    },

    async enrolledCourses(): Promise<Course[]> {    
      const subjects = await doRequest({
        method: 'GET',
        url: '/subjects',
      })

      const result = subjects.map((subject: any) => ({
        id: subject.id,
        code: subject.code,
        name: subject.name,
        year: subject.year,
        degree: subject.degree,
      }))

      return result
    },

    async subject({ subjectId }: { subjectId: string }): Promise<Course> {
      const courses = await client.enrolledCourses()
      const course = courses.find(course => course.id === subjectId)

      if (!course) {
        throw new Error(`Unknown subject ${subjectId}`)
      }

      return course
    },

    async professors({ subjectId }: { subjectId: string }): Promise<Professor[]> {
      const professors = await doRequest({
        method: 'GET',
        url: `/subjects/${subjectId}/professors`,
      })

      return professors.map((p: any) => ({
        code: String(p.id).padStart(6, '0'),
        name: p.name,
        email: p.email,
      }))
    },
    
    async professorTraits({ subjectId }: { subjectId: string }): Promise<ProfessorTrait[]> {
      const traits = await doRequest({
        method: 'GET',
        url: `/surveys/${subjectId}/traits`,
      })

      return traits.map((t: any) => ({
        id: t.id,
        label: t.label,
      }))
      // return [
      //   {id: 't01', label: 'cercano' },
      //   {id: 't02', label: 'impuntual' },
      //   {id: 't03', label: 'accesible para tutorías' },
      //   {id: 't04', label: 'clases amenas' },
      //   {id: 't05', label: 'desorganizado' },
      //   {id: 't06', label: 'se prepara las clases' },
      //   {id: 't07', label: 'se pasa de la hora' },
      //   {id: 't08', label: 'clases poco dinámicas' },
      //   {id: 't09', label: 'buenos apuntes' },
      //   {id: 't10', label: 'poco material de estudio' },
      // ]
    },

    async subjectRating(params: {subjectId: string}): Promise<SubjectRating> {
      return {
        difficulty: 4,
        lessons: 4,
        resources: 4,
      }
    },

    async surveyQuestions({ subjectId }: { subjectId: string }): Promise<SurveyQuestion[]> {
      const questions = await doRequest({
        method: 'GET',
        url: `/surveys/${subjectId}/questions`,
      })

      return questions.map((q: any) => ({
        id: q.id,
        question: q.question,
      }))
      return [
        {
          id: 'qa1',
          question: 'Las actividades de la asignatura se reparten de manera uniforme durante el semestre.',
        },
        {
          id: 'qa2',
          question: 'En el desarrollo de esta asignatura no hay solapamientos con los contenidos de otras, ni repeticiones innecesarias.',
        },
        {
          id: 'qa3',
          question: 'Se han coordinado adecuadamente las clases teóricas y prácticas previstas en el programa.',
        },
        {
          id: 'qa4',
          question: 'Las prácticas de laboratorio y las actividades complementarias (conferencias, seminarios, visitas de estudio, etc.…) ayudan a la comprensión de la asignatura.',
        },
        {
          id: 'qa5',
          question: 'Los métodos utilizados para mi evaluación (exámenes, memorias de prácticas, trabajos individuales o de grupo, etc.) son adecuados para el tipo de actividades y contenidos de la asignatura.',
        },
        {
          id: 'qa6',
          question: 'La carga de trabajo que comprende esta asignatura es adecuada para el número de créditos que tiene asignados.',
        },
        {
          id: 'qa7',
          question: 'Los conocimientos adquiridos en esta asignatura son importantes para mi actividad profesional.',
        },
        {
          id: 'qa8',
          question: 'En general, estoy satisfecho con el desarrollo de la asignatura.',
        },
        {
          id: 'qp1',
          question: 'El profesor cumple con su horario de clase establecido.',
        },
        // FIXME: Faltan preguntas:
        // http://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Ordenacion%20Academica%20y%20Planificacion%20Estrategica/Compromiso%20con%20la%20Calidad/Programas/Docentia/Normativa_DOCENTIA-UPM%202.0_%20CG_26_09_19.pdf
        // pagina 83
      ]
    },

    async submitSurvey(surveyData: any) {
      await doRequest({
        method: 'POST',
        url: `/surveys`,
        body: surveyData,
      })
    },

    async surveyStats(params: { subjectId: string, professorId: string }): Promise<SurveyStats> {
      const { subjectId, professorId } = params

      const stats = await doRequest({
        method: 'GET',
        url: `/stats/${subjectId}`,
      })
      const subject = await client.subject({ subjectId })

      return {
        subjectId: subjectId,
        subject,
        questions: stats.questions.map((q: any)=> ({
          questionId: q.questionId,
          questionText: q.questionText,
          dataset: q.dataset
            .filter(([k]: any) => k > 0)
            .map(([k, v]: any) => [k-1, v])
            .sort(([, v1]:any, [, v2]: any) => v2 - v1),
        }))
        .sort((k1:any, k2:any) => String(k1.questionId).localeCompare(k2.questionId)),
        traits: stats.traits.map((t: any) => ({
          traitId: t.traitId,
          traitLabel: t.traitLabel,
          count: t.count,
        })),
        comments: stats.comments.map((comment: any) => String(comment))
      }
    },
  }

  return client
}

type UniAPIClient = ReturnType<typeof createUniAPIClient>

function addRandomDelayToCalls(client: UniAPIClient): UniAPIClient {
  return new Proxy<UniAPIClient>(client, {
    get(target, prop, receiver) {
      const fn = (target as any)?.[prop]

      if (typeof fn === 'function') {
        const delayWrapper = (...args: any[]) => {
          const returnValue = fn(...args)
          if (returnValue instanceof Promise) {
            return returnValue
              .then(result => new Promise(resolve => setTimeout(resolve, Math.random() * 1000, result)))
              .catch(err => new Promise((_, reject) => setTimeout(reject, Math.random() * 1000, err)))
          }
          return returnValue
        }

        return delayWrapper
      }

      return Reflect.get(target, prop, receiver)
    }
  })
}

const defaultClient = addRandomDelayToCalls(createUniAPIClient())
export default defaultClient
export { createUniAPIClient, addRandomDelayToCalls }
export type { 
  Course,
  Professor,
  ProfessorTrait,
  Profile,
  SubjectRating,
  SurveyQuestion,
  UniAPIClient,
}