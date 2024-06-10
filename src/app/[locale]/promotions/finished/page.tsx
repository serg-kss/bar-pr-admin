import React from "react"
import SideNavBar from "../../components/sideNavBar"
import { useTranslations } from 'next-intl';
import PageNavigation from "../../components/pageNavigation";

const PromotionPageFinished = () => {
    const t = useTranslations("Promotion Page Header")
    const s = useTranslations("SideNavBar")
    const promotionItems = [
        { link: "/promotions/new", label: `${t("prom header new")}` },
        { link: "/promotions/accepted", label: `${t("prom header accepted")}` },
        { link: "/promotions/finished", label: `${t("prom header finished")}` }
    ];
    return (
        <div className='flex'>
            <SideNavBar
                Promotions={s("Promotions")}
                Orders={s("Orders")}
                Home={String("Home")}
                PaymentDetails={s("PaymentDetails")}
                Products={s("Products")}
                FAQ={s("FAQ")}
                Settings={s("Settings")}
                Feedback={s("Feedback")} />
            <PageNavigation items={promotionItems} />
        </div>
    )

}

export default PromotionPageFinished