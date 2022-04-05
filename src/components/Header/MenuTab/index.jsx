import DropdownHeader from 'components/Dropdown/DropdownHeader';
import React, { useEffect, useState } from 'react';
import { capitalizeString } from 'common/functions/index';
import { fetchCategories } from '../modules/categorySlice';
import { categoryApi } from 'apis/categoryApi';
import { useDispatch } from 'react-redux';
function MenuTab() {
    let currentTab = [
        'home',
        'page',
        {
            category: 'blogs',
            menuCategory: ['women blog', 'men blog', 'technology blog']
        },
        'contact'
    ];
    const [tabs, setTabs] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllCategory = async () => {
            const categories = await categoryApi.getAll();

            currentTab.splice(1, 0, ...categories);
            setTabs(currentTab);

            dispatch(fetchCategories(categories));
        };

        fetchAllCategory();
    }, []);

    if (tabs === null) {
        return <div>Loading</div>;
    }

    return (
        <div className="container mx-auto flex justify-start text-white font-medium">
            {tabs.map((tab, idx) => {
                if (typeof tab === 'string') {
                    return (
                        <div className="mx-6" key={idx}>
                            <a>{capitalizeString(tab)}</a>
                        </div>
                    );
                } else {
                    return (
                        <div className="mx-6" key={idx}>
                            <DropdownHeader
                                menuArr={tab.menuCategory.map((item) => ({
                                    title: capitalizeString(item)
                                }))}
                                dropdownTitle={capitalizeString(tab.category)}
                            />
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default MenuTab;
