import '../../assets/styles/filter.scss'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserDataContext, SetUserDataContext, PerPageContext, SetPerPageContext } from '../../App'
import { FilterFormInput } from '../../../interfaces'


type Props = {
  filterToggle: string;
  setFilterToggle: any;
}


function Filter({ filterToggle, setFilterToggle }: Props) {
  const userData = useContext(UserDataContext);
  const setUserData = useContext(SetUserDataContext);
  const perPage = useContext(PerPageContext);
  const setPerPage = useContext(SetPerPageContext);


  //Saving the original data in case of reset
  const allData = userData;

  const { register, reset, handleSubmit, formState: { errors } } = useForm<FilterFormInput>();
  const onSubmit: SubmitHandler<FilterFormInput> = (data) => {
    //Filtering the data
    const newData = allData.filter((item: any) => {
      return data.orgName.toLowerCase() === item.orgName.toLowerCase();
    });
    setUserData(newData);
    setPerPage(newData.length);

    //Closing the form
    setFilterToggle('none');
    reset();
  }


  return (
    <>
      <section className="filter-wrapper" style={{'display': `${filterToggle}`}}>
        <form method='POST'>
          <div className="input-bars">
            <label htmlFor="organisation"> organisation </label>
            <input 
              type="text" 
              id='organisation' 
              {...register("orgName", { required: true })} 
              aria-invalid={errors.orgName ? "true" : "false"}
            />
            {errors.orgName?.type === 'required' && <p className='error' role="alert">This field is required</p>}
          </div>
          <div className="input-bars">
            <label htmlFor="username"> username </label>
            <input 
              type="text" 
              id='username' 
              {...register("userName", { required: true })} 
              aria-invalid={errors.userName ? "true" : "false"}
            />
            {errors.userName?.type === 'required' && <p className='error' role="alert">This field is required</p>}
          </div>
          <div className="input-bars">
            <label htmlFor="email"> email </label>
            <input 
              type="email" 
              id='email' 
              {...register("email", { required: true })} 
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === 'required' && <p className='error' role="alert">This field is required</p>}
          </div>
          <div className="input-bars">
            <label htmlFor="date"> date </label>
            <input 
              type="datetime-local" 
              id='date' 
              {...register("createdAt", { required: true })} 
              aria-invalid={errors.createdAt ? "true" : "false"}
            />
            {errors.createdAt?.type === 'required' && <p className='error' role="alert">This field is required</p>}
          </div>
          <div className="input-bars">
            <label htmlFor="phoneNumber"> phone number </label>
            <input 
              type="tel" 
              id='phoneNumber' 
              {...register("phoneNumber", { required: true })} 
              aria-invalid={errors.phoneNumber ? "true" : "false"}
            />    
            {errors.phoneNumber?.type === 'required' && <p className='error' role="alert">This field is required</p>}  
          </div>
          <div className="input-bars">
            <label htmlFor="status"> status </label>
            <input 
              type="status" 
              id='status' 
              {...register("status", { required: true })} 
              aria-invalid={errors.status ? "true" : "false"}
            />
            {errors.status?.type === 'required' && <p className='error' role="alert">This field is required</p>}
          </div>
          <div className="input-bars">
            <input type='button' value='reset' className='filter-button' onClick={() => reset()}/>
            <input type="submit" value='filter' className='filter-button' onClick={handleSubmit(onSubmit)} />
          </div>
        </form>
      </section>
    </>
  )
}

export default Filter