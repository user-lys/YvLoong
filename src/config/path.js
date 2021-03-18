import Organization from '@/views/Home/components/Personnel/Organization'
import Employee from '@/views/Home/components/Personnel/Employee'
import Manager from '@/views/Home/components/Personnel/Manager'
import Decoration from '@/views/Home/components/Project/Decoration'
import Labour from '@/views/Home/components/Project/Labour'
import Receipt from '@/views/Home/components/Finance/Receipt'
import Payment from '@/views/Home/components/Finance/Payment'
import Otherreceipt from '@/views/Home/components/Finance/Otherreceipt'
import Otherpayment from '@/views/Home/components/Finance/Otherpayment'
import Salary from '@/views/Home/components/Finance/Salary'
import Culture from '@/views/Home/components/Actives/Culture'
import Events from '@/views/Home/components/Actives/Events'


const navPath = [
  {"path":"home/organization","component":<Organization></Organization>},
  {"path":"home/employee","component":<Employee></Employee>},
  {"path":"home/manager","component":<Manager></Manager>},
  {"path":"home/decoration","component":<Decoration></Decoration>},
  {"path":"home/labour","component":<Labour></Labour>},
  {"path":"home/receipt","component":<Receipt></Receipt>},
  {"path":"home/payment","component":<Payment></Payment>},
  {"path":"home/otherreceipt","component":<Otherreceipt></Otherreceipt>},
  {"path":"home/otherpayment","component":<Otherpayment></Otherpayment>},
  {"path":"home/salary","component":<Salary></Salary>},
  {"path":"home/culture","component":<Culture></Culture>},
  {"path":"home/events","component":<Events></Events>},
]

export {
  navPath
}